
import { Episode } from '../types';

const rawEpisodes = [
    { id: 1, title_en: 'Episode one', title_ar: 'الحلقة الاولى', link: 'https://youtu.be/6Q5xNg4T1g4' },
    { id: 2, title_en: 'The Consequences of the Fall Part one', title_ar: 'نتائج السقوط الجزء الاول', link: 'https://youtu.be/n_AW_hhjd4o' },
    { id: 3, title_en: 'The Consequences of the Fall Part Two', title_ar: 'نتائج السقوط الجزء الثاني', link: 'https://youtu.be/oKtVaEQV_60' },
    { id: 4, title_en: 'We have fallen; what shall we do?', title_ar: 'سقطنا! فماذا بعد؟', link: 'https://youtu.be/6DJvTEYkQLY' },
    { id: 5, title_en: 'How can I be saved?', title_ar: 'كيف اخلص؟', link: 'https://youtu.be/FoHZGxjLerM' },
    { id: 6, title_en: 'Hallelujah, we have been saved, part 1', title_ar: 'مجدا خلصنا الجزء الاول', link: 'https://youtu.be/3MoP1I0WUMA' },
    { id: 7, title_en: 'Hallelujah, we have been saved, part 2', title_ar: 'مجدا خلصنا الجزء الثاني', link: 'https://youtu.be/VUsj2BuT53E' },
    { id: 8, title_en: 'Righteousness by faith, not by works, part 1', title_ar: 'البر بالايمان و ليس بالأعمال الجزء الاول', link: 'https://youtu.be/_oa7Kcxu8_o' },
    { id: 9, title_en: 'Righteousness by faith, not by works, part 2', title_ar: 'البر بالايمان و ليس بالأعمال الجزء الثاني', link: 'https://youtu.be/wcycGzLo8N8' },
    { id: 10, title_en: 'Does the one who was born from God commit sin?', title_ar: 'هل المولود من الله لا يخطئ؟', link: 'https://youtu.be/Bg8xbDkhjWM' },
    { id: 11, title_en: 'Yes, the one who was born from God does not sin', title_ar: 'نعم المولود من الله لا يخطئ', link: 'https://youtu.be/JI7qPsxm5D4' },
    { id: 12, title_en: 'Soul Salvation Part One', title_ar: 'خلاص النفس الجزء الاول', link: 'https://youtu.be/ZNcBSIxXxuc' },
    { id: 13, title_en: 'Soul Salvation Part Two', title_ar: 'خلاص النفس الجزء الثاني', link: 'https://youtu.be/I0zp4YaImOk' },
    { id: 14, title_en: 'Soul Salvation Part Three', title_ar: 'خلاص النفس الجزء الثالث', link: 'https://youtu.be/06gbRGsexng' },
    { id: 15, title_en: 'Solving The Mystery of Job Part One', title_ar: 'حل لغز سفر أيوب الجزء الاول', link: 'https://youtu.be/-U_LPoF0UMI' },
    { id: 16, title_en: 'Solving The Mystery of Job Part Two', title_ar: 'حل لغز سفر أيوب الجزء الثاني', link: 'https://youtu.be/-fQ7-hSuICg' },
    { id: 17, title_en: 'Solving The Mystery of Job Part Three', title_ar: 'حل لغز سفر أيوب الجزء الثالث', link: 'https://youtu.be/pmeh7R5QYWw' },
    { id: 18, title_en: 'Solving The Mystery of Job Part Four', title_ar: 'حل لغز سفر أيوب الجزء الرابع', link: 'https://youtu.be/uz4waL1SRTo' },
    { id: 19, title_en: 'Solving The Mystery of Job Part Five', title_ar: 'حل لغز سفر أيوب الجزء الخامس', link: 'https://youtu.be/vPWtX_eRguc' },
    { id: 20, title_en: 'Solving The Mystery of Job Part six', title_ar: 'حل لغز سفر أيوب الجزء السادس', link: 'https://youtu.be/pAh33Ml6gUI' },
    { id: 21, title_en: 'Solving The Mystery of Job Part Seven', title_ar: 'حل لغز سفر أيوب الجزء السابع', link: 'https://youtu.be/-c5skdEXnjk' },
    { id: 22, title_en: 'Solving The Mystery of Job Part Eight', title_ar: 'حل لغز سفر أيوب الجزء الثامن', link: 'https://youtu.be/b5cGsJnYapQ' },
    { id: 23, title_en: 'Solving The Mystery of Job Part Nine', title_ar: 'حل لغز سفر أيوب الجزء التاسع', link: 'https://youtu.be/649whjKOR1M' },
    { id: 24, title_en: 'The Test and Temptation part one', title_ar: 'التجربة والامتحان الجزء الاول', link: 'https://youtu.be/6_8FzzIvdL0' },
    { id: 25, title_en: 'The Test and Temptation part two', title_ar: 'التجربة والامتحان الجزء الثاني', link: 'https://youtu.be/YI5h4FS3g1Y' },
    { id: 26, title_en: 'The Test and Temptation part three', title_ar: 'التجربة والامتحان الجزء الثالث', link: 'https://youtu.be/pyTr8ZD8QfQ' }
];

const getYouTubeVideoId = (url: string): string | null => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const processedEpisodes: Episode[] = rawEpisodes.map(episode => {
    const videoId = getYouTubeVideoId(episode.link);
    return {
        ...episode,
        thumbnailUrl: videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : 'https://picsum.photos/480/360'
    };
});

export const episodeService = {
    getEpisodes: (): Episode[] => {
        return [...processedEpisodes].sort((a, b) => b.id - a.id);
    }
};
