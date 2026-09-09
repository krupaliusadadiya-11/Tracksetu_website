export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Can TrackSetu be used without an internet connection?',
    answer:
      'No. TrackSetu requires an active internet connection to access the system and keep business information synchronized.',
  },
  {
    question: 'Can I access TrackSetu from my mobile phone?',
    answer:
      'Yes. TrackSetu is designed to be accessible across devices, including mobile phones, tablets, laptops, and desktops, allowing you to manage your business from wherever you are.',
  },
  {
    question: 'What will happen to our existing data in Excel or Tally?',
    answer:
      'Your existing business data does not need to be entered from scratch. Data from Excel, Tally, and other supported sources can be migrated to TrackSetu, subject to the data format and migration requirements.',
  },
  {
    question: 'Can different employees have different levels of access?',
    answer:
      'Yes. TrackSetu supports role-based access, allowing you to assign different permissions to different users based on their responsibilities. The number of users and access levels can be configured according to your business requirements.',
  },
  {
    question: 'Who is responsible for taking data backups?',
    answer:
      'MicroPillar manages the backup process for TrackSetu, helping ensure that your business data remains protected and recoverable.',
  },
  {
    question: 'Does TrackSetu support GST calculation?',
    answer:
      'GST-related calculation and functionality is planned for a future release. The feature will be introduced as part of upcoming product enhancements.',
  },
  {
    question: 'Can TrackSetu be configured according to our business process?',
    answer:
      'Yes. TrackSetu can be configured around your business requirements, workflows, user roles, and operational processes, depending on the specific functionality required.',
  },
  {
    question: 'Can we add or remove users as our business grows?',
    answer:
      'Yes. User access can be managed as your organization changes. New users can be added and existing users can have their permissions updated according to their roles and responsibilities.',
  },
];
