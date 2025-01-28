export interface DemoType {
  id: string;
  title: string;
  description: string;
  image: string;
  chatId: string;
}

export const demoTypes: DemoType[] = [
  {
    id: 'solar',
    title: 'Solar Agency',
    description: 'Lead generation and qualification for solar installation companies',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
    chatId: '43259'
  },
  {
    id: 'marketing',
    title: 'Marketing Agency',
    description: 'Client qualification and appointment scheduling for marketing agencies',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
    chatId: 'marketing456'
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    description: 'Property inquiries and showing scheduling for real estate agents',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    chatId: '41324'
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Lead Generation',
    description: 'Product recommendations and customer support for online stores',
    image: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg',
    chatId: 'ecommerce101'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Services',
    description: 'Patient scheduling and initial consultations for healthcare providers',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    chatId: 'healthcare202'
  },
  {
    id: 'education',
    title: 'Education & Training',
    description: 'Course inquiries and student enrollment for educational institutions',
    image: 'https://images.pexels.com/photos/5427867/pexels-photo-5427867.jpeg',
    chatId: 'education303'
  }
]

