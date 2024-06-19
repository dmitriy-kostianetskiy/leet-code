namespace Problem355 {
  class Twitter {
    private following = new Map<number, Set<number>>();
    private tweets = new Map<number, (readonly [number, number])[]>();

    private time = 0;

    constructor() {}

    postTweet(userId: number, tweetId: number): void {
      const tweet = [this.time++, tweetId] as const;

      const userTweets = this.tweets.get(userId) || [];

      userTweets.push(tweet);

      if (userTweets.length > 10) {
        userTweets.shift();
      }

      this.tweets.set(userId, userTweets);
    }

    getNewsFeed(userId: number): number[] {
      const userFollowing = Array.from(this.following.get(userId) || []);

      userFollowing.push(userId);

      const tweets = userFollowing.flatMap((id) => this.tweets.get(id) || []);

      tweets.sort(([time1], [time2]) => time2 - time1);

      return tweets.map(([, tweetId]) => tweetId).slice(0, 10);
    }

    follow(followerId: number, followeeId: number): void {
      // add to following
      const followingSet = this.following.get(followerId) || new Set<number>();

      followingSet.add(followeeId);

      this.following.set(followerId, followingSet);
    }

    unfollow(followerId: number, followeeId: number): void {
      // add to following
      const followingSet = this.following.get(followerId) || new Set<number>();

      followingSet.delete(followeeId);

      this.following.set(followerId, followingSet);
    }
  }
}
