import React from "react";

export const renderElementsNumber = (numberOfelements: number, Element: React.ReactElement) => {
    const elementsToRender = Array(numberOfelements).fill(null);
    return elementsToRender.map((_, index) => React.cloneElement(Element, { key: index }));
};