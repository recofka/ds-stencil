/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppComponent {
    }
    interface FormComponent {
    }
}
declare global {
    interface HTMLAppComponentElement extends Components.AppComponent, HTMLStencilElement {
    }
    var HTMLAppComponentElement: {
        prototype: HTMLAppComponentElement;
        new (): HTMLAppComponentElement;
    };
    interface HTMLFormComponentElement extends Components.FormComponent, HTMLStencilElement {
    }
    var HTMLFormComponentElement: {
        prototype: HTMLFormComponentElement;
        new (): HTMLFormComponentElement;
    };
    interface HTMLElementTagNameMap {
        "app-component": HTMLAppComponentElement;
        "form-component": HTMLFormComponentElement;
    }
}
declare namespace LocalJSX {
    interface AppComponent {
    }
    interface FormComponent {
    }
    interface IntrinsicElements {
        "app-component": AppComponent;
        "form-component": FormComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-component": LocalJSX.AppComponent & JSXBase.HTMLAttributes<HTMLAppComponentElement>;
            "form-component": LocalJSX.FormComponent & JSXBase.HTMLAttributes<HTMLFormComponentElement>;
        }
    }
}
