interface gtype {
  label: object,
  value: string,
  icon: string,
  color: string,
  coef: number,
}

export const garbageTypes: Array<gtype> = [
  {
    label: {
      fr: 'Ordinaire',
      en: 'Ordinary',
    },
    value: 'ordinary',
    icon: 'delete',
    color: '#f44336',
    coef: 0,
  }, {
    label: {
      fr: 'Recyclable',
      en: 'Recyclable',
    },
    value: 'recycle',
    icon: 'loop',
    color: '#ff5722',
    coef: 0.3,
  },{
    label: {
      fr: 'Compostable',
      en: 'Compostable',
    },
    value: 'compost',
    icon: 'all-inclusive',
    color: '#4caf50',
    coef: 1.0,
  },{
    label: {
      fr: 'Verre',
      en: 'Glass',
    },
    value: 'glass',
    icon: 'local-drink',
    color: '#4caf50',
    coef: 1.0,
  },
]
