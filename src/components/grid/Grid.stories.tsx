import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Row, Col, Container } from './index';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: () => (
    <Container>
      <Grid cols={3} gap={4}>
        <Col>Column 1</Col>
        <Col>Column 2</Col>
        <Col>Column 3</Col>
      </Grid>
    </Container>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Container>
      <Grid cols={1} gap={2} responsive={{ sm: 2, md: 4, lg: 6 }}>
        {[...Array(6)].map((_, i) => (
          <Col key={i}>Col {i + 1}</Col>
        ))}
      </Grid>
    </Container>
  ),
};
