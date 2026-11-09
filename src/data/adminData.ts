export interface AdminLead {
  id: string;
  clientName: string;
  serviceRequested: string;
  source: string;
  date: string;
  status: 'New' | 'In Progress' | 'Contacted' | 'Closed';
  priority: 'High' | 'Normal' | 'Urgent';
  value: string;
}

export const sampleAdminLeads: AdminLead[] = [
  {
    id: 'LD-1042',
    clientName: 'Suresh Menon',
    serviceRequested: '3 BHK Villa Enquiry - Sarjapur Road',
    source: 'Sarakki Homes Web Portal',
    date: 'Today, 2:15 PM',
    status: 'New',
    priority: 'High',
    value: '₹1.85 Cr'
  },
  {
    id: 'LD-1041',
    clientName: 'Priya & Vignesh',
    serviceRequested: 'Grand Wedding Package (2 Days)',
    source: 'SID Events Package Builder',
    date: 'Today, 11:40 AM',
    status: 'In Progress',
    priority: 'Urgent',
    value: '₹4.50 Lakh'
  },
  {
    id: 'LD-1040',
    clientName: 'Naveen Kumar',
    serviceRequested: 'Airport Transfer (Ertiga MPV)',
    source: 'Taj Tours Instant Booking',
    date: 'Yesterday, 8:20 PM',
    status: 'Contacted',
    priority: 'Normal',
    value: '₹2,400'
  },
  {
    id: 'LD-1039',
    clientName: 'Anita Deshmukh',
    serviceRequested: 'Coorg 3-Day Roundtrip Tempo Traveller',
    source: 'Winter Cab Quick Quote',
    date: 'Oct 15, 4:05 PM',
    status: 'Closed',
    priority: 'Normal',
    value: '₹18,500'
  },
  {
    id: 'LD-1038',
    clientName: 'Karthik Raja',
    serviceRequested: 'Commercial Office Space (2,400 sq.ft)',
    source: 'The Property Agent Inquiry',
    date: 'Oct 15, 1:12 PM',
    status: 'In Progress',
    priority: 'High',
    value: '₹1.10 Lakh/mo'
  }
];

export const adminCapabilities = [
  {
    title: 'Admin Dashboard Interfaces',
    description: 'Purpose-built management portals engineered for fast data intake, filtering, and operational oversight with minimal cognitive load.',
    icon: 'LayoutDashboard'
  },
  {
    title: 'CRM & Lead Management',
    description: 'Structured customer pipelines tracking inbound inquiries from submission to follow-up, status updates, and closing.',
    icon: 'Users'
  },
  {
    title: 'Customer Enquiry Workflows',
    description: 'Connecting public-facing forms (WhatsApp triggers, quick quotes, package builders) into organized notification and dispatch flows.',
    icon: 'GitFork'
  },
  {
    title: 'Responsive Web Applications',
    description: 'Ensuring administrative tools remain fully operable on mobile phones and tablets for on-the-go business owners and managers.',
    icon: 'Smartphone'
  },
  {
    title: 'Data Presentation & Usability',
    description: 'Transforming dense datasets into scannable stat cards, status indicators, and actionable tables that prioritize urgent actions.',
    icon: 'BarChart3'
  },
  {
    title: 'Deployment & Maintenance',
    description: 'Deploying secure, reliable web applications on platforms like Vercel with automated continuous delivery and environment configuration.',
    icon: 'ShieldCheck'
  }
];
