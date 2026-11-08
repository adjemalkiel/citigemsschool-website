declare module 'wowjs' {
  export class WOWClass {
    constructor(config?: {
      boxClass?: string;
      animateClass?: string;
      offset?: number;
      mobile?: boolean;
      live?: boolean;
      callback?: (box: HTMLElement) => void;
      scrollContainer?: string | null;
      resetAnimation?: boolean;
    });
    init(): void;
  }
  
  const wowjs: {
    WOW: typeof WOWClass;
  };
  
  export default wowjs;
}
