export interface HtmlElement {
  elementName: string
  children: readonly HtmlChild[]
  attributes: Record<string, string>
}

export type HtmlChild = string | HtmlElement | undefined

export function renderHtml(rootElement: HtmlElement): string {
  return '<!DOCTYPE html>' + renderElement(rootElement)
}

function renderElement({
  elementName,
  children,
  attributes,
}: HtmlElement): string {
  const startingTagContent = [elementName]
    .concat(
      Object.entries(attributes).map(
        ([attribute, value]) => `${attribute}="${htmlEscape(value)}"`
      )
    )
    .join(' ')
  const innerHtml = children
    .filter((child): child is string | HtmlElement => child !== undefined)
    .map((child) =>
      typeof child === 'string' ? htmlEscape(child) : renderElement(child)
    )
    .join('')
  return `<${startingTagContent}>${innerHtml}</${elementName}>`
}

function htmlEscape(str: string): string {
  return str.replace(/[&<>"'\/]/g, getHtmlEntity)
}

function getHtmlEntity(character: string): string {
  switch (character) {
    case '&':
      return '&amp;'
    case '<':
      return '&lt;'
    case '>':
      return '&gt;'
    case '"':
      return '&quot;'
    case "'":
      return '&#x27;'
    case '/':
      return '&#x2F;'
    default:
      return character
  }
}

export function h(
  elementName: string,
  children?: readonly HtmlChild[]
): HtmlElement
export function h(
  elementName: string,
  attributes: Record<string, string>,
  children?: readonly HtmlChild[]
): HtmlElement
export function h(
  elementName: string,
  attributesOrChildren?:
    | readonly HtmlChild[]
    | Record<string, string>
    | undefined,
  maybeChildren?: readonly HtmlChild[] | undefined
): HtmlElement {
  const attributes = getAttributes(attributesOrChildren)
  const children = getChildren(attributesOrChildren, maybeChildren)
  return {
    elementName,
    children,
    attributes,
  }
}

function isArray<T>(arg: any): arg is readonly any[] {
  return Array.isArray(arg)
}

function getAttributes(
  attributesOrChildren:
    | readonly HtmlChild[]
    | Record<string, string>
    | undefined
): Record<string, string> {
  if (
    attributesOrChildren !== undefined &&
    typeof attributesOrChildren === 'object' &&
    !isArray(attributesOrChildren)
  ) {
    return attributesOrChildren
  } else {
    return {}
  }
}

function getChildren(
  attributesOrChildren:
    | readonly HtmlChild[]
    | Record<string, string>
    | undefined,
  maybeChildren: readonly HtmlChild[] | undefined
): readonly HtmlChild[] {
  if (isArray(attributesOrChildren)) {
    return attributesOrChildren
  } else if (isArray(maybeChildren)) {
    return maybeChildren
  } else {
    return []
  }
}

export function classNames(
  ...classes: readonly (string | readonly [string, boolean] | undefined)[]
): string {
  return classes
    .map((value) => {
      if (isArray(value)) {
        return value[1] ? value[0] : undefined
      }
      return value
    })
    .filter((x): x is string => x !== undefined)
    .join(' ')
}
