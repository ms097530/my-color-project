import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import DraggableColorBox from './DraggableColorBox';
import { Div } from './utility/styledComponents/styled';

const DraggableColorList = SortableContainer(({ paletteColors, deleteColorBox }) =>
{
    return (
        <Div sx={{ height: '100%', '> *': { marginBottom: '-8px' } }}>
            {paletteColors.map((color, i) =>
            (
                <DraggableColorBox
                    index={i}
                    color={color.color}
                    name={color.name}
                    handleClick={deleteColorBox}
                    key={color.name} />
            ))}
        </Div>
    );
}
)
export default DraggableColorList;
