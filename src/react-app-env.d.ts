/// <reference types="react-scripts" />

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module "*.less" {
    const classes: {[key: string]: string};
    export default classes;
}
