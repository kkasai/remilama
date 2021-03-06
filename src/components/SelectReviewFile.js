/* global window */
import React from 'react'

export default ({onSelectFile}) => (
  <input name="file" type="file" value="" onChange={
           e => {
             const file = e.target.files.item(0)
             if (!file.name.match(/\.pdf$/)) {
               window.alert('Must be PDF')
             } else {
               onSelectFile(file)
             }
           }
         }/>
)
