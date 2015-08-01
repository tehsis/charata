import ID from 'incremental-dom';

/**
 * Represents a HTML Element
 */
export class EL {
  /**
   * Creates a new element
   *
   * @abstract
   * @param {string} tag the specific HTML TAG of the Element.
   * @param {null|String|EL|Array} content
   * @param {Array} props
   */
  constructor(tag, content=null, key='', props=[]) {
    this.tag = tag;
    this.content = content;
    this.key = key;
    this.props = props;
  }

  /**
   * Renders this Element.
   *
   *
   */
  render() {
    if (null === this.content) {
      ID.elementVoid(this.tag, this.key, this.props);
      return;
    }

    if (!Array.isArray(this.content)) {
      this.content = [this.content];
    }

    ID.elementOpen(this.tag, this.key, this.props);

    this.content.forEach((c) => {
      if ('string' === typeof c) {
        c = new TEXT(c);
      }

      c.render();
    });

    ID.elementClose(this.tag);
  }

  renderTo(container) {
    ID.patch(container, this.render.bind(this));
  }
}


class TEXT {
  constructor(content) {
    this.content = content;
  }

  render() {
    ID.text(this.content);
  }
}

export function el (tag, elms, key, props) {
  return new EL(tag, elms, key, props);
}
 
export function div (elms, key, props) {
  return el('div', elms, key, props);
}

export function ul (elms, key, props) {
  return el('ul', elms, key, props);
}

export function li (elms, key, props) {
  return el('li', elms, key, props);
}

export function form (elms, key, props) {
  return el('form', elms, key, props);
}

export function button (elms, key, props) {
  return el('button', elms, key, props);
}

export function input (key, props) {
  return el('input', null, key, props);
}

export function i (elms, key, props) {
  return el('i', elms, key, props);
}

export function a (elms, key, props) {
  return el('a', elms, key, props);
}

export function h1 (elms, key, props) {
  return el('h1', elms, key, props);
}

export function h4 (elms, key, props) {
  return el('h4', elms, key, props);
}
