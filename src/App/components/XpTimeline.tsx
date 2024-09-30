import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import { useTranslation } from 'react-i18next';

export default function XpTimeline() {
  const { t } = useTranslation();
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {t('xp-timeline.first-dot.date')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {t('xp-timeline.first-dot.title')}
          </Typography>
          <Typography>{t('xp-timeline.first-dot.description')}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          {t('xp-timeline.second-dot.date')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          {t('xp-timeline.second-dot.title')}
          </Typography>
          <Typography>{t('xp-timeline.second-dot.description')}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {t('xp-timeline.third-dot.date')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot 
            sx={{ 
              backgroundColor: '#e30513'
            }}
            >
            <SchoolIcon sx={{ color: '#ffc103' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          {t('xp-timeline.third-dot.title')}
          </Typography>
          <Typography>{t('xp-timeline.third-dot.description')}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {t('xp-timeline.fourth-dot.date')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{ 
              backgroundColor: '#FFA500'
            }}>
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          {t('xp-timeline.fourth-dot.title')}
          </Typography>
          <Typography>{t('xp-timeline.fourth-dot.description')}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {t('xp-timeline.fifth-dot.date')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          {t('xp-timeline.fifth-dot.title')}
          </Typography>
          <Typography>{t('xp-timeline.fifth-dot.description')}</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}