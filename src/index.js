import ID from 'incremental-dom';

// TODO: Complete
const TAGS = ['div', 'span', 'ul', 'li', 
              'form', 'input', 'button', 'i', 
              'a', 'h1', 'h2', 'h3', 
              'h4', 'h5', 'table', 'td', 'tr',
              'tbody', 'thead'
              ];


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

let pub = TAGS.reduce((prev, tag) => {
  prev[tag] = (elms, key, props) => {
    return new EL(tag, elms, key, props);
  }

  return prev;
}, {});


// Generic Element constructor
pub.el = (tag, elms, key, props) => new EL(tag, elms, key, props);

export default pub;

