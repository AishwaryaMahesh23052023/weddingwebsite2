import { css } from '@emotion/core';

export const styWrapper = (noImage) => css`
  ${noImage && `margin-left: 100px;`}
`;
