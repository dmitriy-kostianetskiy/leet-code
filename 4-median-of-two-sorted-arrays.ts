namespace Problem4 {
  function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums1Length = nums1.length;
    const nums2Length = nums2.length;
    const totalLength = nums1Length + nums2Length;

    function binSearch(
      targetIndex: number,
      nums1Left: number,
      nums1Right: number,
      nums2Left: number,
      nums2Right: number,
    ): number {
      if (nums1Right < nums1Left) {
        return nums2[targetIndex - nums1Left];
      }

      if (nums2Right < nums2Left) {
        return nums1[targetIndex - nums2Left];
      }

      const nums1MidIndex = nums1Left + Math.floor((nums1Right - nums1Left) / 2);
      const nums2MidIndex = nums2Left + Math.floor((nums2Right - nums2Left) / 2);

      const nums1MidValue = nums1[nums1MidIndex];
      const nums2MidValue = nums2[nums2MidIndex];

      if (nums1MidIndex + nums2MidIndex < targetIndex) {
        if (nums1MidValue > nums2MidValue) {
          return binSearch(targetIndex, nums1Left, nums1Right, nums2MidIndex + 1, nums2Right);
        } else {
          return binSearch(targetIndex, nums1MidIndex + 1, nums1Right, nums2Left, nums2Right);
        }
      } else {
        if (nums1MidValue > nums2MidValue) {
          return binSearch(targetIndex, nums1Left, nums1MidIndex - 1, nums2Left, nums2Right);
        } else {
          return binSearch(targetIndex, nums1Left, nums1Right, nums2Left, nums2MidIndex - 1);
        }
      }
    }

    if (totalLength % 2 === 0) {
      const leftTargetIndex = Math.floor(totalLength / 2);
      const rightTargetIndex = Math.floor(totalLength / 2 - 1);

      return (
        (binSearch(leftTargetIndex, 0, nums1Length - 1, 0, nums2Length - 1) +
          binSearch(rightTargetIndex, 0, nums1Length - 1, 0, nums2Length - 1)) /
        2
      );
    } else {
      const targetIndex = Math.floor(totalLength / 2);

      return binSearch(targetIndex, 0, nums1Length - 1, 0, nums2Length - 1);
    }
  }

  console.log(findMedianSortedArrays([1, 3], [2]));
}
