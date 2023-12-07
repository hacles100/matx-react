import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const OperadoraTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));


const TopOperadoraTable = () => {

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Operadoras Registradas</Title>
      </CardHeader>

      <Box overflow="auto">
        <OperadoraTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Nome
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Email
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Contacto
              </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={1}>
                Ações
               </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {operadorasLista.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center">
                    <Avatar src={product.imgUrl} />
                    <Paragraph sx={{ m: 0, ml: 4 }}>{product.name}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0}}>
                   {product.email}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {product.contacto}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton>
                    <Icon color="primary">edit</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </OperadoraTable>
      </Box>
    </Card>
  );
};

const operadorasLista = [
  {
    imgUrl: '/assets/images/products/tmais.png',
    name: 'Tmais',
    email: 'Tmais@gmail.com',
    contacto: 555,
  },
  {
    imgUrl: '/assets/images/products/alou.png',
    name: 'Alôu',
    email: 'Alou@gmail.com',
    contacto: 333,
  },

];

export default TopOperadoraTable;
