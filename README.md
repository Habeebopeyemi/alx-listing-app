# Best Practices when using State in react:

### Keep State Flat:

`Whether using Redux or Context API, try to keep your state as flat as possible to avoid deep nesting and make updates more straightforward.`

### Modularize:

`Organize your state management code in a modular way. For Redux, this means using slices and combining reducers. For Context API, this means creating separate contexts for different parts of your state.`

### Type Safety:

`Leverage TypeScript’s type system to ensure type safety throughout your state management logic.`

### Selector Functions:

`Use selector functions to encapsulate and reuse the logic for accessing specific parts of the state.`

### Performance Optimization:

`Be mindful of performance, especially with Context API. Use React.memo and useMemo to prevent unnecessary re-renders.`

### Avoid Mutating State:

`Always create a new copy of the state when updating it to avoid mutating the original state.`
