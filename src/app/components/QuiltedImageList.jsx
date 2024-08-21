import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Image from 'next/image';
import BasicTabs from './BasicTabs';

import { itemData } from '../data/data';



function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <div className=''>
      {/* <BasicTabs/>
    <ImageList
      sx={{ width: "100%", height: "100vh" }}
      variant="quilted"
      cols={4}
      rowHeight={300}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <Image
            {...srcset(item.img, 200, item.rows, item.cols)}
            src={item.img}
            alt={item.title}
            width={1000}
            height={1000}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList> */}
    </div>
  );
}


