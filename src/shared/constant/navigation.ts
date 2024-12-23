export interface NavigationItem {
  /**
   * !: Use translation JSON path from `tpath.navigation`!!
   *
   * ```
   * t(`${tpath.navigation}.${tpath}`)
   * ```
   *
   * +) Also used as react id.
   */
  tpath: string;
  href?: string;
  children?: NavigationItem[];
}

const navigationMap: NavigationItem[] = [
  {
    tpath: "sort",
    children: [
      {
        tpath: "sort_bubble-sort",
        href: "/view/bubble-sort",
      },
      {
        tpath: "sort_insertion-sort",
        href: "/view/insertion-sort",
      },
    ],
  },
];

export default navigationMap;
