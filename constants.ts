import { Episode, TeamMember } from './types';

const extractYouTubeId = (url: string): string => {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.slice(1);
    }
    if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
      return urlObj.searchParams.get('v') || '';
    }
  } catch (e) {
    // Failsafe for invalid URLs
    const parts = url.split('/');
    return parts[parts.length - 1];
  }
  return '';
};

const episodeData: Omit<Episode, 'youtubeId'>[] = [
    { id: 1, title: 'Episode one', subtitle: 'الحلقة الاولى', youtubeUrl: 'https://youtu.be/6Q5xNg4T1g4' },
    { id: 2, title: 'The Consequences of the Fall Part one', subtitle: 'نتائج السقوط الجزء الاول', youtubeUrl: 'https://youtu.be/n_AW_hhjd4o' },
    { id: 3, title: 'The Consequences of the Fall Part Two', subtitle: 'نتائج السقوط الجزء الثاني', youtubeUrl: 'https://youtu.be/oKtVaEQV_60' },
    { id: 4, title: 'We have fallen; what shall we do?', subtitle: 'سقطنا! فماذا بعد؟', youtubeUrl: 'https://youtu.be/6DJvTEYkQLY' },
    { id: 5, title: 'How can I be saved?', subtitle: 'كيف اخلص؟', youtubeUrl: 'https://youtu.be/FoHZGxjLerM' },
    { id: 6, title: 'Hallelujah, we have been saved, part 1', subtitle: 'مجدا خلصنا الجزء الاول', youtubeUrl: 'https://youtu.be/3MoP1I0WUMA' },
    { id: 7, title: 'Hallelujah, we have been saved, part 2', subtitle: 'مجدا خلصنا الجزء الثاني', youtubeUrl: 'https://youtu.be/VUsj2BuT53E' },
    { id: 8, title: 'Righteousness by faith, not by works, part 1', subtitle: 'البر بالايمان و ليس بالأعمال الجزء الاول', youtubeUrl: 'https://youtu.be/_oa7Kcxu8_o' },
    { id: 9, title: 'Righteousness by faith, not by works, part 2', subtitle: 'البر بالايمان و ليس بالأعمال الجزء الثاني', youtubeUrl: 'https://youtu.be/wcycGzLo8N8' },
    { id: 10, title: 'Does the one who was born from God commit sin?', subtitle: 'هل المولود من الله لا يخطئ؟', youtubeUrl: 'https://youtu.be/Bg8xbDkhjWM' },
    { id: 11, title: 'Yes, the one who was born from God does not sin', subtitle: 'نعم المولود من الله لا يخطئ', youtubeUrl: 'https://youtu.be/JI7qPsxm5D4' },
    { id: 12, title: 'Episode Fourteen - Soul Salvation Part One', subtitle: 'الحلقة الرابعة عشر - خلاص النفس الجزء الاول', youtubeUrl: 'https://youtu.be/ZNcBSIxXxuc' },
    { id: 13, title: 'Episode Fourteen - Soul Salvation Part Two', subtitle: 'الحلقة الرابعة عشر - خلاص النفس الجزء الثاني', youtubeUrl: 'https://youtu.be/I0zp4YaImOk' },
    { id: 14, title: 'Episode Fourteen - Soul Salvation Part Three', subtitle: 'الحلقة الرابعة عشر - خلاص النفس الجزء الثالث', youtubeUrl: 'https://youtu.be/06gbRGsexng' },
    { id: 15, title: 'Solving The Mystery of Job Part One', subtitle: 'حل لغز سفر أيوب الجزء الاول', youtubeUrl: 'https://youtu.be/-U_LPoF0UMI' },
    { id: 16, title: 'Solving The Mystery of Job Part Two', subtitle: 'حل لغز سفر أيوب الجزء الثاني', youtubeUrl: 'https://youtu.be/-fQ7-hSuICg' },
    { id: 17, title: 'Solving The Mystery of Job Part Three', subtitle: 'حل لغز سفر أيوب الجزء الثالث', youtubeUrl: 'https://youtu.be/pmeh7R5QYWw' },
    { id: 18, title: 'Solving The Mystery of Job Part Four', subtitle: 'حل لغز سفر أيوب الجزء الرابع', youtubeUrl: 'https://youtu.be/uz4waL1SRTo' },
    { id: 19, 'title': 'Solving The Mystery of Job Part Five', subtitle: 'حل لغز سفر أيوب الجزء الخامس', youtubeUrl: 'https://youtu.be/vPWtX_eRguc' },
    { id: 20, title: 'Solving The Mystery of Job Part six', subtitle: 'حل لغز سفر أيوب الجزء السادس', youtubeUrl: 'https://youtu.be/pAh33Ml6gUI' },
    { id: 21, title: 'Solving The Mystery of Job Part Seven', subtitle: 'حل لغز سفر أيوب الجزء السابع', youtubeUrl: 'https://youtu.be/-c5skdEXnjk' },
    { id: 22, title: 'Solving The Mystery of Job Part Eight', subtitle: 'حل لغز سفر أيوب الجزء الثامن', youtubeUrl: 'https://youtu.be/b5cGsJnYapQ' },
    { id: 23, title: 'Solving The Mystery of Job Part Nine', subtitle: 'حل لغز سفر أيوب الجزء التاسع', youtubeUrl: 'https://youtu.be/649whjKOR1M' },
    { id: 24, title: 'The Test and Temptation part one', subtitle: 'التجربة والامتحان الجزء الاول', youtubeUrl: 'https://youtu.be/6_8FzzIvdL0' },
    { id: 25, title: 'The Test and Temptation part two', subtitle: 'التجربة والامتحان الجزء الثاني', youtubeUrl: 'https://youtu.be/YI5h4FS3g1Y' },
    { id: 26, title: 'The Test and Temptation part three', subtitle: 'التجربة والامتحان الجزء الثالث', youtubeUrl: 'https://youtu.be/pyTr8ZD8QfQ' },
];

export const EPISODES: Episode[] = episodeData.map(e => ({
  ...e,
  youtubeId: extractYouTubeId(e.youtubeUrl),
})).reverse(); // Reverse to show latest first

export const TEAM_MEMBERS: TeamMember[] = [
    { name: 'Pastor. Peter El Maasrany', role: 'Host', imageUrl: 'https://res.cloudinary.com/dyjffxbef/image/upload/v1762398907/IMG_3575_ukgpe9.jpg' },
    { name: 'Pastor. Liliane El Maasrany', role: 'Co-Host', imageUrl: 'https://res.cloudinary.com/dyjffxbef/image/upload/v1762398908/IMG_3574_m32q4m.jpg' },
    { name: 'Hagop Bozikian', role: 'Director', imageUrl: 'https://picsum.photos/seed/hagop/400/400' },
    { name: 'Yosif Butrus', role: 'Camera Operator', imageUrl: 'https://picsum.photos/seed/yosif/400/400' },
    { name: 'Hijran Oshana', role: 'Camera Operator', imageUrl: 'https://picsum.photos/seed/hijran/400/400' },
    { name: 'Savan Kajo', role: 'Camera Operator', imageUrl: 'https://picsum.photos/seed/savan/400/400' },
    { name: 'Mohanad Shukri', role: 'Pictures Editor', imageUrl: 'https://picsum.photos/seed/mohanad/400/400' },
    { name: 'Steven Fahmy', role: 'Lighting', imageUrl: 'https://picsum.photos/seed/steven/400/400' },
    { name: 'Rita Shaker', role: 'Production Designer', imageUrl: 'https://picsum.photos/seed/rita/400/400' },
];

export const LOGO_URL = "https://res.cloudinary.com/dyjffxbef/image/upload/v1762368550/3dcaf923-da22-4be7-ab8d-65a2d3408b0a_kpvrsd.png";
export const EPISODE_THUMBNAIL_URL = "https://res.cloudinary.com/dyjffxbef/image/upload/v1762398662/Screenshot_2025-11-05_191038_iukgxb.png";