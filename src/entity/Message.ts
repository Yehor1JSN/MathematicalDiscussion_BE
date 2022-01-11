import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Message {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: true })
    parent_message_id: number;

    @Column()
    sender_name: string;

    @Column()
    post: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;
}
