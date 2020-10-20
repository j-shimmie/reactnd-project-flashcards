import AsyncStorage from '@react-native-community/async-storage'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

export const formatTitleKey = (str) => str.replace(/\s+/g, '')

const NOTIFICATION_KEY = 'Flashcards:notifications'

export const clearNotification = () =>
  AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  )

const createNotificationContent = () => ({
  title: 'Complete a quiz!',
  body: '📚 Remember to get some studying done today',
  sound: true,
})

const createNotificationTrigger = () => {
  let tomorrow = new Date()
  tomorrow.setHours(20)
  tomorrow.setMinutes(0)
  tomorrow.setSeconds(0)
  tomorrow = tomorrow.getTime() + 1000 * 60 * 60 * 24

  return new Date(tomorrow)
}

export const setNotification = () =>
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            Notifications.scheduleNotificationAsync({
              content: createNotificationContent(),
              trigger: createNotificationTrigger(),
            })

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
