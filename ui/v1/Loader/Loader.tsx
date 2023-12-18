import React from 'react';
import { LoaderStyles } from "./styles";

interface LoaderProps {
  width?: string;
  height?: string;
}

const Loader: React.FC<LoaderProps> = ({ width, height }) => {
  return (
    <LoaderStyles style={{ width, height }} />
  )
}

export default Loader;
