// @ts-nocheck
import React from 'react';
import { Icon } from '@/components/icon';
import { PillarWrapper } from './pillar.style';

type PillarProps = {
  icon: string;
  title: string;
  subtitle: string;
  bgColor: string;
};
const Pillar = ({ icon = 'shape', title, subtitle, bgColor }: PillarProps) => (
  <PillarWrapper style={{ backgroundClor: bgColor }}>
    <Icon type={icon} />
    <div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  </PillarWrapper>
);

export default Pillar;
