import { BaseComponent, Component } from "../component.js";
export interface Composable {
  addChild(child: Component): void;
}
class PageItemComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    super(`<li class='page-item'>
            <section class='page-item__body'></section>      
            <div class='page-item__control'>
              <button class='close'>&times;</button>
            </div>
          </li>`);
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    ) as HTMLElement;
    child.attachTo(container, "afterbegin");
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    const htmlString = `<ul class="page"></ul>`;
    super(htmlString);
  }

  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
  }
}
