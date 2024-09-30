import { Card, Avatar, Typography, IconButton, Box } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Self from '../../assets/img/self.jpeg';
import { useTranslation } from 'react-i18next';

const ProfileCard = () => {
  const { t } = useTranslation();
  return (
    <Card sx={{ maxWidth: '75%', margin: 'auto', boxShadow: 3, padding: 4 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          alt="Profile picture"
          src={ Self } // Remplacez par l'URL de votre photo
          sx={{ width: 150, height: 150, marginBottom: 2 }}
        />
        <Typography gutterBottom variant="h4" component="div">
          Thomas VELU
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          {t('profile-card.description')}
        </Typography>
        <Box mt={3} display="flex" justifyContent="center">
          <IconButton href="https://github.com/tvelu77" target="_blank" aria-label="GitHub">
            <GitHub />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/thomas-velu/" target="_blank" aria-label="LinkedIn">
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default ProfileCard;
