import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';

export default function MainContent() {
  return (<>
  <Grid container color={'white'}>
    <Grid xs={6}>
      <div>
        <h2>سبتمر 2023 | 9 </h2>
        <h1>مكة المكرمة</h1>
     </div>
    </Grid>
    <Grid xs={6}>
      <div>
        <h2>متبقي حتى صلاة العصر</h2>
        <h1>00:10:20</h1>
     </div>
    </Grid>
  </Grid>
  </>
   
  )
}
