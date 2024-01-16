import { Avatar, Badge, Card, CardHeader, Container } from '@mui/material'
import './ToDoSummary.css'
import { blueGrey } from '@mui/material/colors'
import { BadgeRounded } from '@mui/icons-material'
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';

const ToDoSummary = () => {
    return (
        <Container className="todoSummaryBox">
            <div>
                <h2>ToDo Summary</h2>
                <div className="boxOfSummaryBoxes">
                    <div className="box1">
                        <Card className="box" raised>
                            <CardHeader title="Hello Box 1" />
                            <Badge badgeContent={5} color="primary" showZero>
                                <FormatListBulletedRoundedIcon />
                            </Badge>
                        </Card>
                    </div>
                    <div className="box2">
                        <Card raised className="box">
                            <CardHeader title="Hello Box 2" />
                            <Badge badgeContent={5} color="warning" showZero>
                                <FormatListNumberedRoundedIcon />
                            </Badge>
                        </Card>
                    </div>
                    <div className="box3">
                        <Card raised className="box">
                            <CardHeader title="Hello Box 3" />
                            <Badge badgeContent={5} color="success" showZero>
                                <ChecklistRtlRoundedIcon />
                            </Badge>
                        </Card>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ToDoSummary