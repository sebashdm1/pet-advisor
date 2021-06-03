export default class FirestoreMock {
  constructor() {
    this.mockCollection = jest.fn(() => this)
    this.mockWhere = jest.fn(() => this)
    this.mockOrderBy = jest.fn(() => this)

    this.mockAdd = jest.fn(() => Promise.resolve(this._mockAddReturn))
    this.mockGet = jest.fn(() => Promise.resolve(this._mockGetReturn))

    this.mockOnSnaptshot = jest.fn((success, error) =>
      success(this._mockOnSnaptshotSuccess),
    )

    this._mockAddReturn = null
    this._mockGetReturn = null
    this._mockOnSnaptshotSuccess = null
  }

  collection(c) {
    return this.mockCollection(c)
  }

  where(...args) {
    return this.mockWhere(...args)
  }

  orderBy(...args) {
    return this.mockOrderBy(...args)
  }

  add(a) {
    return this.mockAdd(a)
  }

  get() {
    return this.mockGet()
  }

  onSnapshot(success, error) {
    return this.mockOnSnaptshot(success, error)
  }

  set mockAddReturn(val) {
    this._mockAddReturn = val
  }

  set mockGetReturn(val) {
    this._mockGetReturn = val
  }

  set mockOnSnaptshotSuccess(val) {
    this._mockOnSnaptshotSuccess = val
  }

  reset() {
    this._mockAddReturn = null
    this._mockGetReturn = null
    this._mockOnSnaptshotSuccess = null

    this.mockCollection.mockClear()
    this.mockWhere.mockClear()
    this.mockOrderBy.mockClear()
    this.mockAdd.mockClear()
    this.mockGet.mockClear()
  }
}
