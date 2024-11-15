import React from 'react';

import { BeatLoader } from 'react-spinners';

const styles = {
    position: "relative",
}

function Loader({ loading, color, size, customStyle = {} }) {
    return (
        <div className='nw_loader'>
            <BeatLoader loading={loading} color={color || '#6E261C'} size={size || '10px'} style={customStyle} />
        </div>
    )
}

export default Loader;