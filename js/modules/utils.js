//Implement TS here

const formatCurrency = (locale, curr, value)=>{
    const result = new Intl.NumberFormat(locale, { style: 'currency', currency: curr }).format(value)
    return result
}

export {formatCurrency}