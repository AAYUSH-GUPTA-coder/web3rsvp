import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Event extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("eventID", Value.fromBytes(Bytes.empty()));
    this.set("eventOwner", Value.fromBytes(Bytes.empty()));
    this.set("eventTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("maxCapacity", Value.fromBigInt(BigInt.zero()));
    this.set("deposit", Value.fromBigInt(BigInt.zero()));
    this.set("paidOut", Value.fromBoolean(false));
    this.set("totalRSVPs", Value.fromBigInt(BigInt.zero()));
    this.set("totalConfirmedAttendees", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Event entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Event entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Event", id.toString(), this);
    }
  }

  static load(id: string): Event | null {
    return changetype<Event | null>(store.get("Event", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get eventID(): Bytes {
    let value = this.get("eventID");
    return value!.toBytes();
  }

  set eventID(value: Bytes) {
    this.set("eventID", Value.fromBytes(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get link(): string | null {
    let value = this.get("link");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set link(value: string | null) {
    if (!value) {
      this.unset("link");
    } else {
      this.set("link", Value.fromString(<string>value));
    }
  }

  get imageURL(): string | null {
    let value = this.get("imageURL");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set imageURL(value: string | null) {
    if (!value) {
      this.unset("imageURL");
    } else {
      this.set("imageURL", Value.fromString(<string>value));
    }
  }

  get eventOwner(): Bytes {
    let value = this.get("eventOwner");
    return value!.toBytes();
  }

  set eventOwner(value: Bytes) {
    this.set("eventOwner", Value.fromBytes(value));
  }

  get eventTimestamp(): BigInt {
    let value = this.get("eventTimestamp");
    return value!.toBigInt();
  }

  set eventTimestamp(value: BigInt) {
    this.set("eventTimestamp", Value.fromBigInt(value));
  }

  get maxCapacity(): BigInt {
    let value = this.get("maxCapacity");
    return value!.toBigInt();
  }

  set maxCapacity(value: BigInt) {
    this.set("maxCapacity", Value.fromBigInt(value));
  }

  get deposit(): BigInt {
    let value = this.get("deposit");
    return value!.toBigInt();
  }

  set deposit(value: BigInt) {
    this.set("deposit", Value.fromBigInt(value));
  }

  get paidOut(): boolean {
    let value = this.get("paidOut");
    return value!.toBoolean();
  }

  set paidOut(value: boolean) {
    this.set("paidOut", Value.fromBoolean(value));
  }

  get totalRSVPs(): BigInt {
    let value = this.get("totalRSVPs");
    return value!.toBigInt();
  }

  set totalRSVPs(value: BigInt) {
    this.set("totalRSVPs", Value.fromBigInt(value));
  }

  get totalConfirmedAttendees(): BigInt {
    let value = this.get("totalConfirmedAttendees");
    return value!.toBigInt();
  }

  set totalConfirmedAttendees(value: BigInt) {
    this.set("totalConfirmedAttendees", Value.fromBigInt(value));
  }

  get rsvps(): Array<string> | null {
    let value = this.get("rsvps");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rsvps(value: Array<string> | null) {
    if (!value) {
      this.unset("rsvps");
    } else {
      this.set("rsvps", Value.fromStringArray(<Array<string>>value));
    }
  }

  get confirmedAttendees(): Array<string> | null {
    let value = this.get("confirmedAttendees");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set confirmedAttendees(value: Array<string> | null) {
    if (!value) {
      this.unset("confirmedAttendees");
    } else {
      this.set(
        "confirmedAttendees",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("totalRSVPs", Value.fromBigInt(BigInt.zero()));
    this.set("totalAttendedEvents", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalRSVPs(): BigInt {
    let value = this.get("totalRSVPs");
    return value!.toBigInt();
  }

  set totalRSVPs(value: BigInt) {
    this.set("totalRSVPs", Value.fromBigInt(value));
  }

  get totalAttendedEvents(): BigInt {
    let value = this.get("totalAttendedEvents");
    return value!.toBigInt();
  }

  set totalAttendedEvents(value: BigInt) {
    this.set("totalAttendedEvents", Value.fromBigInt(value));
  }

  get rsvps(): Array<string> | null {
    let value = this.get("rsvps");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rsvps(value: Array<string> | null) {
    if (!value) {
      this.unset("rsvps");
    } else {
      this.set("rsvps", Value.fromStringArray(<Array<string>>value));
    }
  }

  get attendedEvents(): Array<string> | null {
    let value = this.get("attendedEvents");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set attendedEvents(value: Array<string> | null) {
    if (!value) {
      this.unset("attendedEvents");
    } else {
      this.set("attendedEvents", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class RSVP extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("attendee", Value.fromString(""));
    this.set("event", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RSVP entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RSVP entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RSVP", id.toString(), this);
    }
  }

  static load(id: string): RSVP | null {
    return changetype<RSVP | null>(store.get("RSVP", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get attendee(): string {
    let value = this.get("attendee");
    return value!.toString();
  }

  set attendee(value: string) {
    this.set("attendee", Value.fromString(value));
  }

  get event(): string {
    let value = this.get("event");
    return value!.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }
}

export class Confirmation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("attendee", Value.fromString(""));
    this.set("event", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Confirmation entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Confirmation entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Confirmation", id.toString(), this);
    }
  }

  static load(id: string): Confirmation | null {
    return changetype<Confirmation | null>(store.get("Confirmation", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get attendee(): string {
    let value = this.get("attendee");
    return value!.toString();
  }

  set attendee(value: string) {
    this.set("attendee", Value.fromString(value));
  }

  get event(): string {
    let value = this.get("event");
    return value!.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }
}