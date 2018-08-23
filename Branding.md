# Branding strategies for Mobile App

## HOCs

There are two Higher Order Components that can be used when there's a need to introduce differences in layout based on which brand is the app built for.

### brandedHOC

This HOC is used for differentiating between different variations for a Component.
It takes a `Map<Brand, Component>` as an argument and returns one of the components, based on the brand.

Example usage:

```ts
branded({
  Brand1: Brand1_Button,
  Brand2: Brand2_Button
});
```

### brandedStylesHOC

This HOC is used for injecting "branded" styles into one, common Component.
It takes a `React.ComponentType` and a `Map<Brand, Styles>` as arguments and returns the Component enchanced with an additional `brandedStyles` prop containing styles based on the brand.

Example usage:

```ts
brandedStyles(LoginLayout, {
  Brand1: Brand1_styles,
  Brand2: Brand2_styles
});
```

Additionally, it keeps type-safe checks when using the injected, "branded" styles inside the Component.

For example, if `Brand1_styles` contains an object with:

```
{
  CTA_base: {...},
  CTA_pressed: {...},
  ...
}
```

and `Brand2_styles` contains an object with:

```
{
  CTA_base: {...},
  CTA_disabled: {...},
  ...
}
```

the injected `brandedStyles` prop will look like:

```
{
  CTA_base?: {...},
  CTA_pressed?: {...},
  CTA_disabled?: {...},
  ...
}
```

where the keys are an union between each brand's styles, but each style property may be `undefined`.
It is fine, since we can safely pass `undefined` as `View` style and it prevents typos, e.g. `brandedStyles.CAT_base` will be treated as a TS error.
