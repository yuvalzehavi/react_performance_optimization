export default [
  {
    title: 'useState',
    items: [
      { componentId: 'SplitState', componentName: 'Split State' },
      { componentId: 'CombinedState', componentName: 'Combined State' },
      {
        componentId: 'CombinedStateWithReducer',
        componentName: 'Combined State With Reducer'
      }
    ]
  },
  {
    title: 'React.memo',
    items: [
      { componentId: 'Memo', componentName: 'React.memo' },

      {
        componentId: 'MemoWithAreEqual',
        componentName: 'React.memo with equality check'
      }
    ]
  },
  {
    title: 'useCallback',
    items: [
      { componentId: 'FunctionAsProp', componentName: 'Function as Prop' },

      {
        componentId: 'FunctionAsPropMemoized',
        componentName: 'Memoized Function as Prop'
      },
      {
        componentId: 'CustomHook',
        componentName: 'Custom Hook'
      },
      {
        componentId: 'UseCallbackWithCustomHook',
        componentName: 'useCallback With Custom Hook'
      }
    ]
  },
  {
    title: 'useMemo',
    items: [{ componentId: 'UseMemo', componentName: 'useMemo as Prop' }]
  }
];
