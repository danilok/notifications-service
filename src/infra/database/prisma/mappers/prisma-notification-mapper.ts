import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      canceledAt: notification.canceledAt,
    };
  }

  static toDomain(data: RawNotification): Notification {
    return new Notification(
      {
        category: data.category,
        content: new Content(data.content),
        recipientId: data.recipientId,
        readAt: data.readAt,
        createdAt: data.createdAt,
      },
      data.id,
    );
  }
}
