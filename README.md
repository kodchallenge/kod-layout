# KodLayout

KodLayout was developed for `KodChallenge Editor` and its derivatives, to quickly create page layouts on single-page screens.

KodLayout is a package derived from `react-split` with which you can create splitting tabs.

### Very Simple Usage
- __Base:__ If you want to create a layout, you must first write the base component. Because this component creates the page for you and root for the split tabs.
- __Header:__ It is the section reserved for the header of your page. The `Header` is located at the top of the tabs.
- __Footer:__ Like the `Header`. It is located at the bottom of the page.
- __Row:__ It is used to bring the split tabs `side by side`.
- __Column:__ It is used to bring the split tabs `top and bottom`.


The `Base component` is actually built using flexbox. Therefore, whatever you write in the component is added other HTML Element as space-between along the row.

### Style

Components defined in KodLayout have ids and classes. You can create your own custom theme using these classes or id values.

__Note:__ there is no guarantee that class or id names will not change. For this reason, pay attention to this in version control.

### Examples

#### Like CodePen Layout

```jsx
const CodePen = () => (
    <KodLayout.Base>
        <KodLayout.Header>
            Codepen Layout
        </KodLayout.Header>
        <KodLayout.Column>
            <KodLayout.Row>
                <KodLayout.Tab />
                <KodLayout.Tab />
                <KodLayout.Tab />
            </KodLayout.Row>
            <KodLayout.Tab />
        </KodLayout.Column>
        <KodLayout.Footer>
            Like CodePen
        </KodLayout.Footer>
    </KodLayout.Base>
)
```

#### Like LeetCode Layout

```jsx
const LeetCode = () => (
    <KodLayout.Base>
        <KodLayout.Header>
            Like LeetCode Layout
        </KodLayout.Header>
        <KodLayout.Row>
            <KodLayout.Tab />
            <KodLayout.Column>
                <KodLayout.Tab />
                <KodLayout.Tab />
            </KodLayout.Column>
        </KodLayout.Row>
        <KodLayout.Footer>
            Like LeetCode
        </KodLayout.Footer>
    </KodLayout.Base>
)
```

[Click for other examples](https://github.com/kodchallenge/kod-layout/tree/main/example/src)