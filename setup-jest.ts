import 'jest-canvas-mock';

jest.mock('react-chartjs-2', () => ({
    CategoryScale: () => null,
    LinearScale: () => null,
    PointElement: () => null,
    LineElement: () => null,
    Title: () => null,
    Tooltip: () => null,
    Legend: () => null,
    Line: () => null,
}));