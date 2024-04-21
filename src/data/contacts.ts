export interface Notes {
    id: number;
    content: string;
}

export interface Call {
    id?: number;
    time: string;
    type: 'Incoming' | 'Outgoing' | 'Cancelled';
    duration: string;
}

export interface Contact {
    id: number;
    name: string;
    phone: string;
    notes: Notes[];
    calls: Call[];
}

export const CONTACTS: Contact[] = [
    {
        id: 1,
        name: "Luna Chen",
        phone: '+48 111-222-333',
        notes: [
            {
                id: 1,
                content: 'Newest lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ],
        calls: [
            {
                id: 1,
                time: '19:53',
                type: 'Incoming',
                duration: '37 seconds'
            },
            {
                id: 2,
                time: '12:42',
                type: 'Cancelled',
                duration: '-'
            },
            {
                id: 3,
                time: '01:30',
                type: 'Outgoing',
                duration: '10 seconds'
            },
            {
                id: 4,
                time: '11:05',
                type: 'Incoming',
                duration: '45 seconds'
            },
            {
                id: 5,
                time: '13:22',
                type: 'Outgoing',
                duration: '59 seconds'
            }
        ]
    },
    {
        id: 2,
        name: "Donovan Hayes",
        phone: '+48 111-222-333',
        notes: [
            {
                id: 1,
                content: 'Newest lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ],
        calls: [
            {
              id: 1,
              time: '08:15',
              type: 'Incoming',
              duration: '1 minute 20 seconds'
            },
            {
              id: 2,
              time: '14:50',
              type: 'Outgoing',
              duration: '2 minutes 30 seconds'
            },
            {
              id: 3,
              time: '03:05',
              type: 'Cancelled',
              duration: '-'
            },
            {
              id: 4,
              time: '10:25',
              type: 'Incoming',
              duration: '55 seconds'
            },
            {
              id: 5,
              time: '17:40',
              type: 'Outgoing',
              duration: '3 minutes'
            }
          ]
    },
    {
        id: 3,
        name: "Aisha Patel",
        phone: '+48 111-222-333',
        notes: [
            {
                id: 1,
                content: 'Newest lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ],
        calls: [
            {
              id: 1,
              time: '09:30',
              type: 'Incoming',
              duration: '32 seconds'
            },
            {
              id: 2,
              time: '16:20',
              type: 'Outgoing',
              duration: '1 minute 45 seconds'
            },
            {
              id: 3,
              time: '07:55',
              type: 'Cancelled',
              duration: '-'
            },
            {
              id: 4,
              time: '13:10',
              type: 'Incoming',
              duration: '30 seconds'
            },
            {
              id: 5,
              time: '18:05',
              type: 'Outgoing',
              duration: '4 minutes'
            }
          ]
    },
    {
        id: 4,
        name: "Jasper Nguyen",
        phone: '+48 111-222-333',
        notes: [
            {
                id: 1,
                content: 'Newest lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ],
        calls: [
            {
              id: 11,
              time: '11:20',
              type: 'Incoming',
              duration: '1 minute 10 seconds'
            },
            {
              id: 12,
              time: '15:45',
              type: 'Outgoing',
              duration: '47 seconds'
            },
            {
              id: 13,
              time: '06:10',
              type: 'Cancelled',
              duration: '-'
            },
            {
              id: 14,
              time: '12:30',
              type: 'Incoming',
              duration: '45 seconds'
            },
            {
              id: 15,
              time: '19:15',
              type: 'Outgoing',
              duration: '3 minutes 20 seconds'
            }
          ]
    },
    {
        id: 5,
        name: "Maya Thompson",
        phone: '+48 111-222-333',
        notes: [
            {
                id: 1,
                content: 'Newest lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ],
        calls: [
            {
              id: 16,
              time: '08:45',
              type: 'Incoming',
              duration: '2 minutes 15 seconds'
            },
            {
              id: 17,
              time: '14:10',
              type: 'Outgoing',
              duration: '1 minute'
            },
            {
              id: 18,
              time: '05:25',
              type: 'Cancelled',
              duration: '-'
            },
            {
              id: 19,
              time: '11:55',
              type: 'Incoming',
              duration: '1 minute 30 seconds'
            },
            {
              id: 20,
              time: '16:35',
              type: 'Outgoing',
              duration: '2 minutes 45 seconds'
            }
          ]
    },
    {
        id: 6,
        name: "Declan Rodriguez",
        phone: '+48 111-222-333',
        notes: [
            {
                id: 1,
                content: 'Newest lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ],
        calls: [
            {
              id: 26,
              time: '08:30',
              type: 'Incoming',
              duration: '20 seconds'
            },
            {
              id: 27,
              time: '14:15',
              type: 'Outgoing',
              duration: '45 seconds'
            },
            {
              id: 28,
              time: '06:55',
              type: 'Cancelled',
              duration: '-'
            },
            {
              id: 29,
              time: '11:40',
              type: 'Incoming',
              duration: '35 seconds'
            },
            {
              id: 30,
              time: '18:20',
              type: 'Outgoing',
              duration: '15 seconds'
            }
          ]
    },
    {
        id: 7,
        name: "Harper Kim",
        phone: '+48 111-222-333',
        notes: [
            {
                id: 1,
                content: 'Newest lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ],
        calls: [
            {
              id: 31,
              time: '09:10',
              type: 'Incoming',
              duration: '25 seconds'
            },
            {
              id: 32,
              time: '15:25',
              type: 'Outgoing',
              duration: '55 seconds'
            },
            {
              id: 33,
              time: '07:15',
              type: 'Cancelled',
              duration: '-'
            },
            {
              id: 34,
              time: '12:50',
              type: 'Incoming',
              duration: '40 seconds'
            },
            {
              id: 35,
              time: '17:30',
              type: 'Outgoing',
              duration: '10 seconds'
            }
          ]
    },
    {
        id: 8,
        name: "Zara Alvarado",
        phone: '+48 111-222-333',
        notes: [
            {
                id: 1,
                content: 'Newest lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ],
        calls: [
            {
              id: 36,
              time: '08:05',
              type: 'Incoming',
              duration: '15 seconds'
            },
            {
              id: 37,
              time: '14:40',
              type: 'Outgoing',
              duration: '30 seconds'
            },
            {
              id: 38,
              time: '06:20',
              type: 'Cancelled',
              duration: '-'
            },
            {
              id: 39,
              time: '11:15',
              type: 'Incoming',
              duration: '20 seconds'
            },
            {
              id: 40,
              time: '18:00',
              type: 'Outgoing',
              duration: '45 seconds'
            }
          ]
    },
    {
        id: 9,
        name: "Kai Johnson",
        phone: '+48 111-222-333',
        notes: [
            {
                id: 1,
                content: 'Newest lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ],
        calls: [
            {
              id: 41,
              time: '09:35',
              type: 'Incoming',
              duration: '50 seconds'
            },
            {
              id: 42,
              time: '15:10',
              type: 'Outgoing',
              duration: '5 seconds'
            },
            {
              id: 43,
              time: '07:50',
              type: 'Cancelled',
              duration: '-'
            },
            {
              id: 44,
              time: '12:25',
              type: 'Incoming',
              duration: '15 seconds'
            },
            {
              id: 45,
              time: '17:55',
              type: 'Outgoing',
              duration: '25 seconds'
            }
          ]
    },
    {
        id: 10,
        name: "Isabella Ramirez",
        phone: '+48 111-222-333',
        notes: [
            {
                id: 1,
                content: 'Newest lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ],
        calls: [
            {
              id: 46,
              time: '08:50',
              type: 'Incoming',
              duration: '35 seconds'
            },
            {
              id: 47,
              time: '14:20',
              type: 'Outgoing',
              duration: '40 seconds'
            },
            {
              id: 48,
              time: '06:15',
              type: 'Cancelled',
              duration: '-'
            },
            {
              id: 49,
              time: '11:30',
              type: 'Incoming',
              duration: '10 seconds'
            },
            {
              id: 50,
              time: '18:10',
              type: 'Outgoing',
              duration: '55 seconds'
            }
          ]
    },
];