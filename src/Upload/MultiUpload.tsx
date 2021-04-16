import { makeArray, segmentArray } from '../utils/array-utils';
import { PlusOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { GalleryPop } from '../ImageView';
import { ImageOption } from '../ImageView/Gallery';
import Image, { FileInfo } from './Image';
import { SingleUploadProps } from './SingleUpload';
import Upload from './Upload';

function setArrayItem<T>(array: Array<T>, index: number, d: Partial<T>) {
  var lastData = array[index];
  array.splice(index, 1, typeof lastData === 'object' ? { ...lastData, ...d } : (d as any));
  return [...array];
}

export interface MultiUploadProps<T = any>
  extends Pick<
    SingleUploadProps<T>,
    Exclude<keyof SingleUploadProps<T>, 'value' | 'onChange' | 'onImageView' | 'onImageRemove'>
  > {
  /**
   * 图片url列表
   */
  value?: string[];
  /**
   * 图片url列表改变
   */
  onChange?: (url: string[]) => void;
  /**
   * 图片点击事件
   */
  onImageView?: (index: number, fileInfos: FileInfo[]) => void;
  /**
   * 图片删除事件
   */
  onImageRemove?: (index: number, fileInfos: FileInfo[]) => void;
  /**
   * 最大上传数量
   */
  max?: number;
  /**
   * 单行图片的数量, 默认4
   */
  length?: number;
}

function MultiUpload<T>(props: MultiUploadProps<T>) {
  const {
    prefixCls = 'weui-multi-upload',
    className,
    style,
    disabled,
    onChange,
    getResponse,
    onImageView,
    onImageRemove,
    max = 10,
    length = 4,
    disableDelete,
    multiple = true,
    ...uploadProps
  } = props;
  const [value, setValue] = useState<string[]>([]);
  const [fileInfos, setFileInfos] = useState<FileInfo[]>([]);
  // 由于Upload的回调事件是原生的，导致state不会是最新的
  const fileInfosRef = useRef(fileInfos);
  const closeRef = useRef<Function | null>(null);
  // 当前批量上传数量，用于判断是否批量上传完毕
  const batchUploadLength = useRef(0);

  function close() {
    if (closeRef.current) {
      closeRef.current();
    }
  }

  function changeFileInfos(infos: FileInfo[]) {
    fileInfosRef.current = infos;
    setFileInfos(infos);
  }

  function changeValue(urls: string[]) {
    if (onChange) {
      onChange(urls);
    }
    setValue(urls);
  }

  useEffect(() => {
    if ('value' in props) {
      // 受控同步
      setValue(props.value || []);
      // // 批量上传全部完毕才允许同步.  否则代表没有批量上传完成，或者已经失败了
      if (batchUploadLength.current !== 0) {
        return;
      }

      if (props.value) {
        fileInfosRef.current = props.value.map((x) => ({
          thumbnail: x,
          file: null,
          percent: 100,
          status: 'success',
        }));
        setFileInfos(fileInfosRef.current);
      } else {
        setFileInfos([]);
      }
    }
  }, [props.value]);

  function handleBatchUpload(files: File[]) {
    batchUploadLength.current = files.length;
    setValue(makeArray(files.length, '') as string[]);
  }

  function handleUpload(file: File) {
    const files = fileInfosRef.current;
    if (files.length >= max) {
      return;
    }
    changeFileInfos([...files, { thumbnail: URL.createObjectURL(file), file, percent: 0, status: 'uploading' }]);
  }

  function handleSuccess(file: File, response: T, xhr: XMLHttpRequest) {
    const files = fileInfosRef.current;
    const index = files.findIndex((fileInfo) => fileInfo.file === file);
    if (index === -1) {
      return;
    }
    changeFileInfos(setArrayItem(files, index, { response, percent: 100, status: 'success' }));
    try {
      if (getResponse) {
        const url = getResponse(response);
        changeValue(setArrayItem(value, index, url));
        // 全部批量上传成功，则重置计数
        if (fileInfosRef.current.every((x) => x.status === 'success')) {
          batchUploadLength.current = 0;
        }
      }
    } catch (error) {
      changeFileInfos(setArrayItem(files, index, { percent: 100, status: 'fail' }));
    }
  }

  function handleError(file: File, error: Error, response?: T) {
    const files = fileInfosRef.current;
    const index = files.findIndex((fileInfo) => fileInfo.file === file);
    if (index === -1) {
      return;
    }
    changeFileInfos(setArrayItem(files, index, { percent: 100, status: 'fail' }));
  }

  function handleProgress(file: File, percent: number, event: ProgressEvent<EventTarget>) {
    const files = fileInfosRef.current;
    const index = files.findIndex((fileInfo) => fileInfo.file === file);
    if (index === -1) {
      return;
    }
    changeFileInfos(setArrayItem(files, index, { percent, status: 'uploading' }));
  }

  function handleImageView(index: number) {
    const files = fileInfosRef.current;
    if (onImageView) {
      onImageView(index, files);
    } else {
      const images = files.map((file) => ({ src: file.thumbnail })).filter((x) => x.src !== null) as ImageOption[];
      closeRef.current = GalleryPop({
        data: images,
        defaultIndex: index,
        bottom: !disabled && (
          <div
            className="upload-image-view__delete"
            onClick={() => {
              handleImageRemove(index);
              close();
            }}
          >
            删除
          </div>
        ),
      });
    }
  }

  function handleImageRemove(index: number) {
    const files = fileInfosRef.current;
    if (onImageRemove) {
      onImageRemove(index, files);
    }

    changeFileInfos(files.filter((_, i) => i !== index));
    changeValue(value.filter((_, i) => i !== index));
  }

  function renderItems() {
    const array = segmentArray(fileInfos.concat(['btn' as any]), length);
    return array.map((row, i) => (
      <div className="flexbox" key={i}>
        {row.map((fileInfo, j) => (
          <div className="flexbox-item" key={j}>
            {(fileInfo as any) === 'btn'
              ? fileInfos.length < max &&
                !disabled && (
                  <Upload<T>
                    {...uploadProps}
                    multiple={max <= 1 ? false : multiple}
                    disabled={disabled}
                    onBatchUpload={handleBatchUpload}
                    onUpload={handleUpload}
                    onSuccess={handleSuccess}
                    onProgress={handleProgress}
                    onError={handleError}
                  >
                    <div className={`${prefixCls}-uploadBtn`}>
                      <PlusOutlined />
                    </div>
                  </Upload>
                )
              : fileInfo && (
                  <Image
                    key={i * length + j}
                    disableDelete={disabled ? true : disableDelete}
                    onImageView={() => handleImageView(i * length + j)}
                    onImageRemove={() => handleImageRemove(i * length + j)}
                    fileInfo={fileInfo}
                  />
                )}
          </div>
        ))}
      </div>
    ));
  }

  return (
    <div className={classNames(prefixCls, className)} style={style}>
      <div className={`${prefixCls}-list`}>{renderItems()}</div>
    </div>
  );
}

export default React.memo(MultiUpload);
