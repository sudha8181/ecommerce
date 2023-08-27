import React from 'react';

export const FormatPrice = ({price}) => {
    return Intl.NumberFormat("EN-IN",{
        style:"currency",
        currency:"INR",
        maximumFractionDigits:2

    }).format(price/100);
};
