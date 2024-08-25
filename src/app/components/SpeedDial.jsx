

'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import { social } from '../data/data';

export default function BasicSpeedDial() {
  const handleClick = (href) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {social.map((s) => (
          <SpeedDialAction
            key={s.title}
            icon={s.icon}
            tooltipTitle={s.title}
            onClick={() => handleClick(s.href)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

