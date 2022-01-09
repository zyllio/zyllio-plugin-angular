const Icon = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="#cccccc">    
  <path d="M13 7V9H15V17H17V7H13M11 13H9V15H7V13H5V11H7V9H9V11H11V13Z" />
</svg>
`;

export const CounterMetadata: ComponentMetadataModel = {
  id: 'custom-counter',
  icon: Icon,
  label: 'Counter',
  category: 'Basics',
  subCategory: 'Plugins',
  hidden: false,
  keepRatio: false,
  properties: [{
    id: 'value',
    name: 'Value',
    type: 'number',
    tootip: 'The counter value',
    default: '1',
    main: true
  }],
  styles: [{
    id: 'width',
    name: 'Width',
    type: 'width',
    default: '340px'
  },
  {
    id: 'height',
    name: 'Height',
    type: 'height',
    default: '60px'
  }, {
    id: '--color',
    name: 'Color',
    type: 'color',
    default: '#fca311'
  }  
  ]
}
