import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TopCards() {
  return (
    <div className="flex gap-6">
      <div>
      <Card sx={{ minWidth: 220, borderRadius:4, minHeight:100 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Pending Appointments
        </Typography>
        <Typography variant="h6" component="div" color="purple">
          Total: 3
        </Typography>
      </CardContent>
    </Card>
      </div>

      <div>
      <Card sx={{ minWidth: 250, borderRadius:4, minHeight:100 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Completed Appointments
        </Typography>
        <Typography variant="h6" component="div" color="purple">
          Total: 3
        </Typography>
      </CardContent>
    </Card>
    </div>
      <div>
      <Card sx={{ minWidth: 250, borderRadius:4, minHeight:100 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Pending Payments
        </Typography>
        <Typography variant="h6" component="div" color="purple">
          Total: ksh500
        </Typography>
      </CardContent>
    </Card>
      </div>

      <div>
      <Card sx={{ minWidth: 220, borderRadius:4, minHeight:100 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Amount Spent
        </Typography>
        <Typography variant="h6" component="div" color="purple">
        Total: ksh 10,000
        </Typography>
      </CardContent>
    </Card>
      </div>
    </div>
  );
}
export default TopCards;
