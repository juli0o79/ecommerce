export const renderElementsNumber = (numberOfelements:number, element: React.ReactNode)=>{
    const elementsToRender = Array(numberOfelements).fill(null);
    return elementsToRender.map(()=> element);
}