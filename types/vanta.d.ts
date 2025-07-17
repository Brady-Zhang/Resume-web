// Vanta.js类型定义
declare module 'vanta/dist/vanta.halo.min.js' {
  interface VantaEffect {
    destroy: () => void;
  }

  interface VantaHaloOptions {
    el: HTMLElement | string;
    THREE?: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    backgroundColor?: number;
    xOffset?: number;
    size?: number;
  }

  export function HALO(options: VantaHaloOptions): VantaEffect;
  
  namespace VANTA {
    function HALO(options: VantaHaloOptions): VantaEffect;
  }
  
  export = VANTA;
} 