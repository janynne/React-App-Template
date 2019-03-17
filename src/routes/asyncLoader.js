import React from 'react';
import Loadable from 'react-loadable';

export function loadAsync(component) {

    const loader = Loadable({
        loader: () => import('../' + component),
        loading() {
            return <div className="flex flex-center flex-full flex-column text-center">
                      <h3>Loading...</h3>
                   </div>
        }
    });

    return loader;
}

