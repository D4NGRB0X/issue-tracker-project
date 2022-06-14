import {IssueInterface} from './interfaces/issue';

export class Issue implements IssueInterface {
  description: string;
  issueNo: number;
  completed: Date;
  priority: 'low' | 'high';
  title: string;
  type: 'Feature' | 'Bug' | 'Documentation';
  constructor(
    description: string,
    issueNo: number,
    priority: "low" | "high",
    title: string,
    type: "Feature" | "Bug" | "Documentation",
    completed?: Date,
    ) {
    // this.completed = completed;
    // this.description = description;
    // this.issueNo = issueNo;
    // this.priority = priority;
    // this.title = title;
    // this.type = type;
  }

}
