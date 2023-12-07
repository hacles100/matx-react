import { Box } from '@mui/material';
import { MatxProgressBar, SimpleCard } from 'app/components';
import { Small } from 'app/components/Typography';

const Campaigns = () => {
  return (
    <Box>
      <SimpleCard title="Tecnologia">
        <Small color="text.secondary">5G</Small>
        <MatxProgressBar value={75} color="primary" text="Alôu" />
        <MatxProgressBar value={45} color="secondary" text="Tmais" />

        <Small color="text.secondary" display="block" pt={4}>
          4G
        </Small>
        <MatxProgressBar value={75} color="primary" text="Alôu" />
        <MatxProgressBar value={45} color="secondary" text="Tmais" />

        <Small color="text.secondary" display="block" pt={4}>
          3G
        </Small>
        <MatxProgressBar value={75} color="primary" text="Alôu" />
        <MatxProgressBar value={45} color="secondary" text="Tmais" />
      </SimpleCard>
    </Box>
  );
};

export default Campaigns;
